# OZI

<img src="https://raw.githubusercontent.com/OZI-Project/brand/main/images/ozi_social_preview.png" alt="Logo" width="680px">

OZI is a Python packaging tool under active development that runs as a meson subproject inside your source tree.

<br>

<div class="package-info">
<p><img src="https://img.shields.io/pypi/status/ozi?style=flat-square&amp;logo=pypi" alt="Button"> <img src="https://img.shields.io/pypi/pyversions/OZI?style=flat-square&amp;logo=python" alt="PyPI - Python Version"> <img src="https://img.shields.io/badge/SLSA-level_3-grey?style=flat-square&amp;logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSJub25lIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNDAgMTQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzEpIiBjbGlwLXBhdGg9InVybCgjYSkiPgo8cGF0aCBkPSJtMTYxLjUzIDMuMDk5NGUtNSAwLjM4NS0wLjQzNTQzLTcuNDkzLTYuNjIyMi0zLjMxMSAzLjc0NjVjLTAuOTg5IDEuMTE4NC0xLjk5MSAyLjIyMjItMy4wMDggMy4zMTExaC0xMTcuMXY3Ljc5MTlsLTYuODc5OSA0LjI0MDMgMi42MjM0IDQuMjU2NWMxLjM3MzUgMi4yMjg1IDIuNzkyOSA0LjQxOTYgNC4yNTY1IDYuNTcyNHY5My40MjFjLTAuMDMzOSAxZS0zIC0wLjA2NzggMWUtMyAtMC4xMDE4IDJlLTNsLTQuOTk4OSAwLjEwMiAwLjIwMzUgOS45OTggNC44OTcyLTAuMXYxMy43MTZoMTQwdi04OC42ODRjMS40NC0yLjA3MzQgMi44NC00LjE4MyA0LjE5Ni02LjMyODIgMi4yNzktMy40MjkyIDMuOTcxLTYuMzYxMyA1LjEwMy04LjQ1NzkgMC41Ny0xLjA1NCAwLjk5OC0xLjg5ODYgMS4yOS0yLjQ5MTIgMC4xNDYtMC4yOTY0IDAuMjU4LTAuNTI5OSAwLjMzNi0wLjY5NTMgMC4wMzktMC4wODI3IDAuMDY5LTAuMTQ4NCAwLjA5MS0wLjE5NjRsMC4wMjctMC4wNTg3IDllLTMgLTAuMDE5MiAzZS0zIC0wLjAwNzEgMWUtMyAtMC4wMDI5IDFlLTMgLTAuMDAxM2MwLTZlLTQgMC0wLjAwMTEtNC41NTctMi4wNTc4bDQuNTU3IDIuMDU2NyAyLjA1Ny00LjU1NzUtOS4xMTUtNC4xMTMyLTIuMDU0IDQuNTUxOHYxZS0zbC0xZS0zIDllLTQgLTFlLTMgMC4wMDE3djJlLTNsLThlLTMgMC4wMTc0Yy0wLjAxMSAwLjAyMzQtMC4wMyAwLjA2NDItMC4wNTcgMC4xMjE2LTAuMDU0IDAuMTE1LTAuMTQxIDAuMjk2Ny0wLjI2MSAwLjUzOTktMC4yMzkgMC40ODY2LTAuNjExIDEuMjE4OC0xLjExNiAyLjE1NS0wLjE1NSAwLjI4NTktMC4zMjIgMC41OTA3LTAuNTAxIDAuOTEzMXYtMzIuNjl6bTAgMGgtMTMuNDI3Yy0yMi4wNDYgMjMuNjE4LTUwLjU5MSA0MC4yNDYtODEuOTkxIDQ3Ljc3OS0xMS44NzUtMTAuNTQxLTIyLjMwNS0yMi44NzEtMzAuODUxLTM2LjczN2wtMi42MjM0LTQuMjU2NS0xLjYzMzEgMS4wMDY1djE1LjA2OWM4LjcwNzYgMTIuODA3IDE4Ljk4MiAyNC4yNTkgMzAuNDgyIDM0LjE1NiAxNi41MyAxNC4yMjYgMzUuNTkxIDI1LjI0MiA1Ni4xNyAzMi40NjEtMTcuNDI0IDExLjM4Ny0zNi45NjIgMTkuNDQ4LTU3LjYxMiAyMy42MDUtOS40Nzc0IDEuOTA3LTE5LjE5IDIuOTkyLTI5LjA0IDMuMTk5djEwLjAwMmwwLjEwMTgtMmUtM2MxMC40ODQtMC4yMTMgMjAuODIzLTEuMzY1IDMwLjkxMS0zLjM5NiAyNS40MDMtNS4xMTMgNDkuMjE3LTE1Ljc5NiA2OS43ODYtMzEuMDkgMTUuMDEtMTEuMTYxIDI4LjI5Mi0yNC43NzkgMzkuMjAxLTQwLjQ4di0xOC42MjZjLTAuOTk2IDEuNzkwOC0yLjM4IDQuMTI3LTQuMTYzIDYuODA4bC0wLjAzMyAwLjA0OTEtMC4wMzEgMC4wNDk4Yy0xMC41MTIgMTYuNjM5LTIzLjc1OSAzMS4wMTUtMzguOTYyIDQyLjY4LTE4Ljg4MS01LjcwOS0zNi41NTUtMTQuNzU4LTUyLjE4LTI2LjY2MiAzMS45ODItOS4xMjkyIDYwLjgyNy0yNy4yNSA4Mi45NjktNTIuMzA0eiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZjAzMTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJhIj4KPHBhdGggZD0ibTMxIDI4YzAtMTUuNDY0IDEyLjUzNi0yOCAyOC0yOGg4NGMxNS40NjQgMCAyOCAxMi41MzYgMjggMjh2ODRjMCAxNS40NjQtMTIuNTM2IDI4LTI4IDI4aC04NGMtMTUuNDY0IDAtMjgtMTIuNTM2LTI4LTI4eiIgZmlsbD0iI2ZmZiIvPgo8L2NsaXBQYXRoPgo8L2RlZnM%2BCjwvc3ZnPgo%3D&amp;color=dark-green" alt="Static Badge"> <img src="https://img.shields.io/badge/License-Apache--2.0_with_LLVM_exceptions-282661?style=flat-square&amp;logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8%2BCjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAxMjIuODggMTAyLjcyIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjIuODggMTAyLjcyIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJzY2FsZS1pY29uKDEpLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4xLjIgKDBhMDBjZjUzMzksIDIwMjItMDItMDQpIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzCiAgICAgaWQ9ImRlZnMxMSIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzkiCiAgICAgcGFnZWNvbG9yPSIjNTA1MDUwIgogICAgIGJvcmRlcmNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSI3Ljk4Mjg2NTkiCiAgICAgaW5rc2NhcGU6Y3g9IjYxLjQ0NDA5OCIKICAgICBpbmtzY2FwZTpjeT0iNzEuNDY1NTYyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDA5IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIxMTE0IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iZzYiIC8%2BPHN0eWxlCiAgICAgdHlwZT0idGV4dC9jc3MiCiAgICAgaWQ9InN0eWxlMiI%2BLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48ZwogICAgIGlkPSJnNiI%2BPHBhdGgKICAgICAgIGNsYXNzPSJzdDAiCiAgICAgICBkPSJtIDY1LjYxLDIwLjkxIHYgNzIuNzQgaCAzNS42MyBjIDAuMzgsMCAwLjY4LDAuMzEgMC42OCwwLjY5IHYgNy43IGMgMCwwLjM4IC0wLjMxLDAuNjkgLTAuNjgsMC42OSBoIC03OC40IGMgLTAuMzgsMCAtMC42OSwtMC4zMSAtMC42OSwtMC42OSB2IC03LjcgYyAwLC0wLjM4IDAuMzEsLTAuNjkgMC42OSwtMC42OSBIIDU4LjQ3IFYgMjAuOTQgYyAtMy4xLC0xLjA4IC01LjU2LC0zLjUzIC02LjY0LC02LjYzIEggMjkuMyB2IDMuNDMgYyAwLDAuMzggLTAuMzEsMC42OCAtMC42OCwwLjY4IGggLTUuNzggYyAtMC4zOCwwIC0wLjY5LC0wLjMxIC0wLjY5LC0wLjY4IHYgLTMuNDMgaCAtNS43MyBjIC0wLjQ0LDAgLTAuOCwtMC4zMSAtMC44LC0wLjY4IFYgNy44NCBjIDAsLTAuMzggMC4zNiwtMC42OSAwLjgsLTAuNjkgSCA1MS44NSBDIDUzLjMzLDIuOTkgNTcuMzEsMCA2MS45OSwwIGMgNC42OCwwIDguNjYsMi45OSAxMC4xNCw3LjE2IGggMzUuNTMgYyAwLjQ0LDAgMC44LDAuMzEgMC44LDAuNjkgdiA1Ljc4IGMgMCwwLjM4IC0wLjM2LDAuNjggLTAuOCwwLjY4IGggLTYuNDYgdiAzLjQzIGMgMCwwLjM4IC0wLjMxLDAuNjggLTAuNjgsMC42OCBoIC01Ljc4IGMgLTAuMzgsMCAtMC42OSwtMC4zMSAtMC42OSwtMC42OCBWIDE0LjMxIEggNzIuMTYgYyAtMS4wNywzLjA3IC0zLjQ5LDUuNSAtNi41NSw2LjYgeiBtIDM0LjA1LDEuMzkgMjIuOTEsNDAuNDggYyAwLjIsMC4zNSAwLjI5LDAuNzMgMC4yOCwxLjEgaCAwLjAyIHYgMC4xNSBjIDAsOS42NCAtMTEuMzUsMTcuNDYgLTI1LjM1LDE3LjQ2IC0xMy44NSwwIC0yNS4xLC03LjY1IC0yNS4zNCwtMTcuMTUgLTAuMDQsLTAuMTYgLTAuMDYsLTAuMzQgLTAuMDYsLTAuNTEgMCwtMC40NCAwLjE0LC0wLjg2IDAuMzcsLTEuMiBMIDk1LjkyLDIyLjIgYyAwLjU5LC0xLjAyIDEuODksLTEuMzcgMi45MSwtMC43OCAwLjM3LDAuMjMgMC42NSwwLjUzIDAuODMsMC44OCB6IG0gMC4wOSw4LjgxIHYgMzAuNiBoIDE3LjMyIHogbSAwLDMwLjYgViAzMS4xMSBMIDgyLjA0LDYxLjcxIFogTSAyNy41NCwyMi4zIDUwLjQ1LDYyLjc4IGMgMC4yLDAuMzUgMC4yOSwwLjczIDAuMjgsMS4xIGggMC4wMiB2IDAuMTUgQyA1MC43NSw3My42NyAzOS40LDgxLjQ5IDI1LjQsODEuNDkgMTEuNTUsODEuNDkgMC4zLDczLjg0IDAuMDYsNjQuMzQgMC4wMiw2NC4xOSAwLDY0LjAyIDAsNjMuODQgMCw2My40IDAuMTQsNjIuOTggMC4zNyw2Mi42NCBMIDIzLjgsMjIuMjEgYyAwLjU5LC0xLjAyIDEuODksLTEuMzcgMi45MSwtMC43OCAwLjM3LDAuMjIgMC42NSwwLjUyIDAuODMsMC44NyB6IG0gMC4wOSw4LjgxIHYgMzAuNiBoIDE3LjMyIHogbSAwLDMwLjYgViAzMS4xMSBMIDkuMTQyODk2MSw2MS42NTA2MjQgWiBNIDYxLjk5LDYuMDcgYyAyLjU5LDAgNC42OSwyLjEgNC42OSw0LjY5IDAsMi41OSAtMi4xLDQuNjkgLTQuNjksNC42OSAtMi41OSwwIC00LjY5LC0yLjEgLTQuNjksLTQuNjkgMCwtMi41OSAyLjEsLTQuNjkgNC42OSwtNC42OSB6IgogICAgICAgaWQ9InBhdGg0IgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY3Nzc3Nzc3NzY2NjY3Nzc3Njc3Nzc2NzY3Nzc3Njc3Nzc2NjY2NjY2Nzc2NzY2NjY2NjY2NjY2NjY2NjY3NzY3NjY2NjY2NjY2NjY2Nzc3NzcyIgLz48L2c%2BPC9zdmc%2BCg%3D%3D" alt="License"></p>
</div>

## Comparison of Python Packaging Tools

<div class="compare-table">
<table><thead>
  <tr>
    <th>Project</th>
    <th>PyPI Package</th>
    <th>Meson Integration</th>
    <th>Fast Dependency Resolution w/ <code>uv</code></th>
    <th>CI Templates</th>
    <th>Cython &amp; C Extensions without <code>setup.py</code></th>
    <th>Repo Size</th>
  </tr></thead>
<tbody>
  <tr>
    <td><a href="https://oziproject.dev/"><a href="https://oziproject.dev/"><img src="https://raw.githubusercontent.com/OZI-Project/brand/main/images/ozi-badge.svg" alt="OZI Badge"></a></a></td>
    <td>✅</td>
    <td>✅</td>
    <td>✅&nbsp;(1)</td>
    <td>✅</td>
    <td>✅</td>
    <td><img src="https://img.shields.io/github/languages/code-size/OZI-Project/OZI?label=%20" alt="GitHub code size in bytes">&nbsp;(2)</td>
  </tr>
  <tr>
    <td><a href="https://pypi.org/project/flit/"><a href="https://pypi.org/project/flit/"><img src="https://img.shields.io/badge/-Flit-grey?logo=pypi" alt="Static Badge"></a></a></td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td><img src="https://img.shields.io/github/languages/code-size/pypa/flit?label=%20" alt="GitHub code size in bytes"></td>
  </tr>
  <tr>
    <td><a href="https://pypi.org/project/hatch/"><a href="https://pypi.org/project/hatch/"><img src="https://img.shields.io/badge/-Hatch-grey?logo=pypi" alt="Static Badge"></a></a></td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
    <td><img src="https://img.shields.io/github/languages/code-size/pypa/hatch?label=%20" alt="GitHub code size in bytes"></td>
  </tr>
  <tr>
    <td><a href="https://pypi.org/project/poetry/"><a href="https://pypi.org/project/poetry/"><img src="https://img.shields.io/badge/-Poetry-grey?logo=poetry" alt="Static Badge"></a></a></td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td><img src="https://img.shields.io/github/languages/code-size/python-poetry/poetry?label=%20" alt="GitHub code size in bytes"></td>
  </tr>
  <tr>
    <td><a href="https://pypi.org/project/pdm/"><a href="https://pypi.org/project/pdm/"><img src="https://img.shields.io/badge/-PDM-grey?logo=pdm" alt="Static Badge"></a></a></td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td><img src="https://img.shields.io/github/languages/code-size/pdm-project/pdm?label=%20" alt="GitHub code size in bytes"></td>
  </tr>
  <tr>
    <td><a href="https://rye-up.com"><a href="https://rye-up.com"><img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/mitsuhiko/rye/main/artwork/badge.json" alt="Rye"></a></a></td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td><img src="https://img.shields.io/github/languages/code-size/astral-sh/rye?label=%20" alt="GitHub code size in bytes"></td>
  </tr>
  <tr>
    <td><a href="https://pyscaffold.org/"><a href="https://pyscaffold.org/"><img src="https://img.shields.io/badge/-PyScaffold?style=social&amp;logo=pyscaffold&amp;logoColor=005CA0&amp;label=PyScaffold" alt="PyScaffold"></a></a></td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
    <td><img src="https://img.shields.io/github/languages/code-size/pyscaffold/pyscaffold?label=%20" alt="GitHub code size in bytes"></td>
  </tr>
</tbody></table>

<small>This was current as of August 2024 feel free to email help@oziproject.dev if you see something wrong.</small>
<br>
<ul>
<li><small>Uses <code>pipx</code> to provision <em>application</em> environments, packages without entrypoints are installed with <code>uv</code> falling back to <code>pip</code> and <code>pip-compile</code>.</small></li>
<li><small><code>ozi-templates</code> includes ~800kB of templates.</small></li>
</ul>
</div>

## <img src="https://raw.githubusercontent.com/OZI-Project/OZIproject.dev/main/PATREON_PLUS_OZI_SYMBOL_1_BLACK.svg" alt="Logo" height=19px> Funding Members

* Lander Besabe

## Projects Packaged with OZI

<a href="https://pypi.org/project/blastpipe"><img src="https://raw.githubusercontent.com/OZI-Project/brand/main/images/blastpipe-logo.png" width=62px></a>

* <a href="https://pypi.org/project/TAP-Producer">TAP-Producer</a>
* <a href="https://pypi.org/project/TAP-Consumer">TAP-Consumer</a>

<script src="https://giscus.app/client.js"
      data-repo="OZI-Project/.github"
      data-repo-id="R_kgDOLAb2hQ"
      data-category="Announcements"
      data-category-id="DIC_kwDOLAb2hc4Cca6C"
      data-mapping="og:title"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="https://www.oziproject.dev/assets/css/giscus.css"
      data-lang="en"
      crossorigin="anonymous"
      async>
</script>
<div class="dagger-note">
<div class="dagger">&dagger;</div>
  <small>
  <a href="https://mesonbuild.com/">Meson</a> is a registered trademark of 
  Jussi Pakkanen. The OZI project is not affiliated with or endorsed by the Meson 
  development team or Jussi Pakkanen.
  </small>
</div>
<small>
  The GitHub&#174; Octocat&#174; logo and other trademarks are used under the terms of a <a href="https://github.com/logos">license</a>, the OZI Project is not affiliated with or endorsed by GitHub, Inc.
</small>
<small>
  The Patreon "P" logo and other trademarks are used under the terms of a <a href="https://www.patreon.com/brand">license</a>, the OZI Project is not endorsed by Patreon, Inc.
</small>
<small>
  The Python logo, Python Package Index logo, and other trademarks are used under the terms of a <a href="https://www.python.org/psf/trademarks/">license</a>, the OZI Project is not affiliated with or endorsed by the Python Software Foundation.
</small>
<small>
  Read the Docs logos and other trademarks are used under the terms of the <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a>
  license.
</small>
<small>
  The sigstore codesigned seal and other trademarks are used under the terms of a <a href="https://www.linuxfoundation.org/legal/trademark-usage">license</a>, the OZI Project is not affilated with or endorsed by The Linux Foundation.
</small>

