var docbaseConfig = {
  "method": "github",
  "generic": {
    "baseurl": "",
    "path": ""
  },
  "file": {
    "path": ""
  },
  "github": {
    "user": "squaredup",
    "repo": "docs",
    "path": "docs",
    "branch": "master",
    "access_token": "ZTBkMjA4NjY1ZmNmZWFhYTY1ZTdiY2ZiYzk4N2E0OTk0OWQyNGEzMA=="
  },
  "indexHtml": "./html/main.html",
  "flatdocHtml": "./bower_components/docbase/html/flatdoc.html",
  "default_version": "",
  "manual_override": false,
  "versions": {
    "v2": [
      {
        "label": "plugins",
        "name": "plugins",
        "files": [
          {
            "name": "web",
            "label": "web"
          },
          {
            "label": "index",
            "name": "index"
          }
        ]
      }
    ],
    "v3": [
      {
        "label": "changelog",
        "name": "changelog",
        "files": [
          {
            "name": "changelog",
            "label": "changelog"
          },
          {
            "label": "index",
            "name": "index"
          }
        ]
      }
    ]
  },
  "publish": "github"
};