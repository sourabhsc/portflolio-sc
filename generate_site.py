import os
import shutil
from pathlib import Path

from app import app, get_static_json


DIST = Path("dist")


def clean_dist():
    if DIST.exists():
        shutil.rmtree(DIST)

    DIST.mkdir(parents=True)


def generate_page(client, route, output_path, script_name=""):
    response = client.get(
        route,
        environ_overrides={
            "SCRIPT_NAME": script_name
        }
    )

    if response.status_code != 200:
        raise RuntimeError(
            f"Failed to generate {route}: "
            f"HTTP {response.status_code}"
        )

    output = DIST / output_path
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_bytes(response.data)

    print(f"Generated {route} -> {output}")


def generate():
    clean_dist()

    # GitHub Pages project sites have URLs like:
    #
    # https://username.github.io/repository/
    #
    # GitHub provides GITHUB_REPOSITORY as:
    #
    # username/repository
    repository = os.environ.get("GITHUB_REPOSITORY", "")

    if "/" in repository:
        repo_name = repository.split("/", 1)[1]
        script_name = f"/{repo_name}"
    else:
        script_name = ""

    with app.test_client() as client:

        # --------------------------------
        # Main pages
        # --------------------------------

        generate_page(
            client,
            "/",
            "index.html",
            script_name
        )

        generate_page(
            client,
            "/timeline",
            "timeline/index.html",
            script_name
        )

        generate_page(
            client,
            "/reading",
            "reading/index.html",
            script_name
        )

        generate_page(
            client,
            "/projects",
            "projects/index.html",
            script_name
        )

        generate_page(
            client,
            "/experiences",
            "experiences/index.html",
            script_name
        )

        # --------------------------------
        # Individual projects/experiences
        # --------------------------------

        projects = get_static_json(
            "static/projects/projects.json"
        )["projects"]

        experiences = get_static_json(
            "static/experiences/experiences.json"
        )["experiences"]

        generated = set()

        for item in projects + experiences:
            title = item.get("link")

            if not title:
                continue

            if title in generated:
                continue

            generated.add(title)

            generate_page(
                client,
                f"/projects/{title}",
                f"projects/{title}/index.html",
                script_name
            )

        # --------------------------------
        # Static assets
        # --------------------------------

        shutil.copytree(
            "static",
            DIST / "static",
            dirs_exist_ok=True
        )

        # --------------------------------
        # Favicon
        # --------------------------------

        favicon = Path("static/files/favicon.ico")

        if favicon.exists():
            shutil.copy2(
                favicon,
                DIST / "favicon.ico"
            )

        # --------------------------------
        # 404
        # --------------------------------

        generate_page(
            client,
            "/does-not-exist",
            "404.html",
            script_name
        )

    print()
    print("Static site generated successfully.")
    print(f"Output directory: {DIST.resolve()}")


if __name__ == "__main__":
    generate()