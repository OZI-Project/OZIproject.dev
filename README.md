# Homepage

## OZI &mdash; Python Project Packaging for Meson

A set of free (and open source) tools to make Python package publishing easier. This project is under active development but *unstable*. OZI is expected to be in Alpha release status by <s>January 2024</s> Q1 2024.

![Button](https://img.shields.io/pypi/status/ozi?style=for-the-badge&logo=pypi) ![PyPI - Python Version](https://img.shields.io/pypi/pyversions/OZI?style=for-the-badge&logo=python) ![Static Badge](https://img.shields.io/badge/SLSA-level_3-grey?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSJub25lIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNDAgMTQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzEpIiBjbGlwLXBhdGg9InVybCgjYSkiPgo8cGF0aCBkPSJtMTYxLjUzIDMuMDk5NGUtNSAwLjM4NS0wLjQzNTQzLTcuNDkzLTYuNjIyMi0zLjMxMSAzLjc0NjVjLTAuOTg5IDEuMTE4NC0xLjk5MSAyLjIyMjItMy4wMDggMy4zMTExaC0xMTcuMXY3Ljc5MTlsLTYuODc5OSA0LjI0MDMgMi42MjM0IDQuMjU2NWMxLjM3MzUgMi4yMjg1IDIuNzkyOSA0LjQxOTYgNC4yNTY1IDYuNTcyNHY5My40MjFjLTAuMDMzOSAxZS0zIC0wLjA2NzggMWUtMyAtMC4xMDE4IDJlLTNsLTQuOTk4OSAwLjEwMiAwLjIwMzUgOS45OTggNC44OTcyLTAuMXYxMy43MTZoMTQwdi04OC42ODRjMS40NC0yLjA3MzQgMi44NC00LjE4MyA0LjE5Ni02LjMyODIgMi4yNzktMy40MjkyIDMuOTcxLTYuMzYxMyA1LjEwMy04LjQ1NzkgMC41Ny0xLjA1NCAwLjk5OC0xLjg5ODYgMS4yOS0yLjQ5MTIgMC4xNDYtMC4yOTY0IDAuMjU4LTAuNTI5OSAwLjMzNi0wLjY5NTMgMC4wMzktMC4wODI3IDAuMDY5LTAuMTQ4NCAwLjA5MS0wLjE5NjRsMC4wMjctMC4wNTg3IDllLTMgLTAuMDE5MiAzZS0zIC0wLjAwNzEgMWUtMyAtMC4wMDI5IDFlLTMgLTAuMDAxM2MwLTZlLTQgMC0wLjAwMTEtNC41NTctMi4wNTc4bDQuNTU3IDIuMDU2NyAyLjA1Ny00LjU1NzUtOS4xMTUtNC4xMTMyLTIuMDU0IDQuNTUxOHYxZS0zbC0xZS0zIDllLTQgLTFlLTMgMC4wMDE3djJlLTNsLThlLTMgMC4wMTc0Yy0wLjAxMSAwLjAyMzQtMC4wMyAwLjA2NDItMC4wNTcgMC4xMjE2LTAuMDU0IDAuMTE1LTAuMTQxIDAuMjk2Ny0wLjI2MSAwLjUzOTktMC4yMzkgMC40ODY2LTAuNjExIDEuMjE4OC0xLjExNiAyLjE1NS0wLjE1NSAwLjI4NTktMC4zMjIgMC41OTA3LTAuNTAxIDAuOTEzMXYtMzIuNjl6bTAgMGgtMTMuNDI3Yy0yMi4wNDYgMjMuNjE4LTUwLjU5MSA0MC4yNDYtODEuOTkxIDQ3Ljc3OS0xMS44NzUtMTAuNTQxLTIyLjMwNS0yMi44NzEtMzAuODUxLTM2LjczN2wtMi42MjM0LTQuMjU2NS0xLjYzMzEgMS4wMDY1djE1LjA2OWM4LjcwNzYgMTIuODA3IDE4Ljk4MiAyNC4yNTkgMzAuNDgyIDM0LjE1NiAxNi41MyAxNC4yMjYgMzUuNTkxIDI1LjI0MiA1Ni4xNyAzMi40NjEtMTcuNDI0IDExLjM4Ny0zNi45NjIgMTkuNDQ4LTU3LjYxMiAyMy42MDUtOS40Nzc0IDEuOTA3LTE5LjE5IDIuOTkyLTI5LjA0IDMuMTk5djEwLjAwMmwwLjEwMTgtMmUtM2MxMC40ODQtMC4yMTMgMjAuODIzLTEuMzY1IDMwLjkxMS0zLjM5NiAyNS40MDMtNS4xMTMgNDkuMjE3LTE1Ljc5NiA2OS43ODYtMzEuMDkgMTUuMDEtMTEuMTYxIDI4LjI5Mi0yNC43NzkgMzkuMjAxLTQwLjQ4di0xOC42MjZjLTAuOTk2IDEuNzkwOC0yLjM4IDQuMTI3LTQuMTYzIDYuODA4bC0wLjAzMyAwLjA0OTEtMC4wMzEgMC4wNDk4Yy0xMC41MTIgMTYuNjM5LTIzLjc1OSAzMS4wMTUtMzguOTYyIDQyLjY4LTE4Ljg4MS01LjcwOS0zNi41NTUtMTQuNzU4LTUyLjE4LTI2LjY2MiAzMS45ODItOS4xMjkyIDYwLjgyNy0yNy4yNSA4Mi45NjktNTIuMzA0eiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZjAzMTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJhIj4KPHBhdGggZD0ibTMxIDI4YzAtMTUuNDY0IDEyLjUzNi0yOCAyOC0yOGg4NGMxNS40NjQgMCAyOCAxMi41MzYgMjggMjh2ODRjMCAxNS40NjQtMTIuNTM2IDI4LTI4IDI4aC04NGMtMTUuNDY0IDAtMjgtMTIuNTM2LTI4LTI4eiIgZmlsbD0iI2ZmZiIvPgo8L2NsaXBQYXRoPgo8L2RlZnM%2BCjwvc3ZnPgo%3D&color=dark-green) ![License](https://img.shields.io/badge/License-Apache--2.0_with_LLVM_exceptions-282661?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTIyLjg4IDEwMi43MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIyLjg4IDEwMi43MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BPHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO308L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02NS42MSwyMC45MXY3Mi43NGgzNS42M2MwLjM4LDAsMC42OCwwLjMxLDAuNjgsMC42OXY3LjdjMCwwLjM4LTAuMzEsMC42OS0wLjY4LDAuNjlIMjIuODQgYy0wLjM4LDAtMC42OS0wLjMxLTAuNjktMC42OXYtNy43YzAtMC4zOCwwLjMxLTAuNjksMC42OS0wLjY5aDM1LjYzbDAtNzIuNzFjLTMuMS0xLjA4LTUuNTYtMy41My02LjY0LTYuNjNIMjkuM3YzLjQzIGMwLDAuMzgtMC4zMSwwLjY4LTAuNjgsMC42OGgtNS43OGMtMC4zOCwwLTAuNjktMC4zMS0wLjY5LTAuNjh2LTMuNDNoLTUuNzNjLTAuNDQsMC0wLjgtMC4zMS0wLjgtMC42OFY3Ljg0IGMwLTAuMzgsMC4zNi0wLjY5LDAuOC0wLjY5aDM1LjQzQzUzLjMzLDIuOTksNTcuMzEsMCw2MS45OSwwYzQuNjgsMCw4LjY2LDIuOTksMTAuMTQsNy4xNmgzNS41M2MwLjQ0LDAsMC44LDAuMzEsMC44LDAuNjl2NS43OCBjMCwwLjM4LTAuMzYsMC42OC0wLjgsMC42OGgtNi40NnYzLjQzYzAsMC4zOC0wLjMxLDAuNjgtMC42OCwwLjY4aC01Ljc4Yy0wLjM4LDAtMC42OS0wLjMxLTAuNjktMC42OHYtMy40M0g3Mi4xNiBDNzEuMDksMTcuMzgsNjguNjcsMTkuODEsNjUuNjEsMjAuOTFMNjUuNjEsMjAuOTF6IE05OS42NiwyMi4zbDIyLjkxLDQwLjQ4YzAuMiwwLjM1LDAuMjksMC43MywwLjI4LDEuMWgwLjAyYzAsMC4wNSwwLDAuMSwwLDAuMTUgYzAsOS42NC0xMS4zNSwxNy40Ni0yNS4zNSwxNy40NmMtMTMuODUsMC0yNS4xLTcuNjUtMjUuMzQtMTcuMTVjLTAuMDQtMC4xNi0wLjA2LTAuMzQtMC4wNi0wLjUxYzAtMC40NCwwLjE0LTAuODYsMC4zNy0xLjIgbDIzLjQzLTQwLjQzYzAuNTktMS4wMiwxLjg5LTEuMzcsMi45MS0wLjc4Qzk5LjIsMjEuNjUsOTkuNDgsMjEuOTUsOTkuNjYsMjIuM0w5OS42NiwyMi4zeiBNOTkuNzUsMzEuMTF2MzAuNmgxNy4zMkw5OS43NSwzMS4xMSBMOTkuNzUsMzEuMTF6IE05NS42Nyw2MS43VjMxLjE2TDc3Ljk2LDYxLjdIOTUuNjdMOTUuNjcsNjEuN3ogTTI3LjU0LDIyLjNsMjIuOTEsNDAuNDhjMC4yLDAuMzUsMC4yOSwwLjczLDAuMjgsMS4xaDAuMDIgYzAsMC4wNSwwLDAuMSwwLDAuMTVjMCw5LjY0LTExLjM1LDE3LjQ2LTI1LjM1LDE3LjQ2Yy0xMy44NSwwLTI1LjEtNy42NS0yNS4zNC0xNy4xNUMwLjAyLDY0LjE5LDAsNjQuMDIsMCw2My44NCBjMC0wLjQ0LDAuMTQtMC44NiwwLjM3LTEuMkwyMy44LDIyLjIxYzAuNTktMS4wMiwxLjg5LTEuMzcsMi45MS0wLjc4QzI3LjA4LDIxLjY1LDI3LjM2LDIxLjk1LDI3LjU0LDIyLjNMMjcuNTQsMjIuM3ogTTI3LjYzLDMxLjExdjMwLjZoMTcuMzJMMjcuNjMsMzEuMTFMMjcuNjMsMzEuMTF6IE0yMy41NCw2MS43VjMxLjE2TDUuODQsNjEuN0gyMy41NEwyMy41NCw2MS43eiBNNjEuOTksNi4wNyBjMi41OSwwLDQuNjksMi4xLDQuNjksNC42OWMwLDIuNTktMi4xLDQuNjktNC42OSw0LjY5Yy0yLjU5LDAtNC42OS0yLjEtNC42OS00LjY5QzU3LjMsOC4xNyw1OS40LDYuMDcsNjEuOTksNi4wN0w2MS45OSw2LjA3eiIvPjwvZz48L3N2Zz4%3D)

<small>
  &dagger; <a href="https://mesonbuild.com/">Meson</a> is a registered trademark of 
  Jussi Pakkanen. The OZI project is not affiliated with or endorsed by the Meson 
  development team or Jussi Pakkanen.
</small>

<small>
  Read the Docs logos and other trademarks are used under the terms of the <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a>
  license. The GitHub&#174; Octocat&#174; logo and other trademarks are used under the terms of a <a href="https://github.com/logos">license</a>.
  The OZI Project is not affiliated with or endorsed by GitHub, Inc. The Python logo, Python Package Index logo, and other trademarks are used under the terms of a <a href="https://www.python.org/psf/trademarks/">license</a>, the OZI Project is not affiliated with or endorsed by the Python Software Foundation.
</small>
