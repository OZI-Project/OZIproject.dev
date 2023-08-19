# Home

## Links

[![Static Badge](https://img.shields.io/badge/Python%20Package%20Index-grey?style=for-the-badge&logo=pypi)](https://pypi.org/project/OZI/)[![PyPI - Status](https://img.shields.io/pypi/status/ozi?style=for-the-badge)](https://pypi.org/project/OZI/)

[![Static Badge](https://img.shields.io/badge/Repository-grey?style=for-the-badge&logo=git)](https://github.com/rjdbcm/ozi) [![Static Badge](https://img.shields.io/badge/Documentation-grey?style=for-the-badge&logo=readthedocs&link=docs.oziproject.dev)](https://docs.oziproject.dev)

[![Static Badge](https://img.shields.io/badge/OPENSSF%20BEST%20PRACTICES-grey?style=for-the-badge&logo=openssf)](https://bestpractices.coreinfrastructure.org/projects/7515/badge)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Frjdbcm%2Fozi.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Frjdbcm%2Fozi?ref=badge_large)

## Maintainer Blog

### Personal Introduction

#### Post #2 18-Aug-2023

I am Eden Rose, the maintainer of the OZI project.
I am a freelance developer. Code is a way I express myself.
In the past I have fallen into the trap of only writing hobby projects.
I enjoyed those very much but am wanting something less substantial but more community-focused.
Python is the programming language I use the most.
The Python community needs ways to reduce the packaging learning curve.

### OZI in-the-large

#### Post #1 18-Aug-2023

The OZI project focuses on packaging Python modules with Meson.

Let's talk about about OZI in-the-large:

* I want a way to ensure all the semantic information related to packaging is itself packaged and versioned.
* I want a complete solution for packaging that pragmatically defers to third-party utility.
* I want small boilerplate build scripts.
* I want a standardized API.
* I want checkpointing for the distribution, documentation, linting, and testing utility environment.

### Pragmatic Deferal

#### Post #0 18-Aug-2023

In many cases coverage reports will indicate blocks of code that writing a test for would amount to
implementing a sanity check of the principal and reimplementing their test cases.

e.g. looping over simplicial types:

```python3
# pragma: defer to python
```

#### Post #3 19-Aug-2023

This is the standard snippet I have been using:

```toml
[tool.coverage.report]
exclude_lines = [
    "#\\s*(pragma|PRAGMA)[:\\s]?\\s*(no|NO)\\s*(cover|COVER)",
    "#\\s*(pragma|PRAGMA)[:\\s]?\\s*(defer|DEFER)\\s*(to|TO)\\s*[a-zA-Z0-9_]*",
    ...
]
```
