package(default_visibility = ["//visibility:public"])

filegroup(
    name = "bazel_files",
    srcs = glob(["files/**/*.bazel", "files/**/*.bzl"]),
)

filegroup(
    name = "prettier_files",
    srcs = glob(
        [
            "files/**/*.css",
            "files/**/*.html",
            "files/**/*.js",
            "files/**/*.json",
            "files/**/*.md",
            "files/**/*.svg",
            "files/**/*.ts",
            "files/**/*.tsx",
            "files/**/*.yml",
        ],
    ),
)
