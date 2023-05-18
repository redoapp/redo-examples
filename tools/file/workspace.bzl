load("@rules_file//file:workspace.bzl", "files")

def file_repositories():
    files(
        name = "files",
        build = "//tools/file:files.bzl",
        ignores = [
            ".git",
            "shopify-extension-react/node_modules",
        ],
        root_file = "//:WORKSPACE.bazel",
    )
