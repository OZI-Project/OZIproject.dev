# Home

## Links

[![Static Badge](https://img.shields.io/badge/Documentation-grey?style=for-the-badge&logo=readthedocs&link=docs.oziproject.dev)](https://docs.oziproject.dev)

## Maintainer Blog

### Personal Introduction and OZI in-the-large

#### 18-Aug-2023

I am Eden Rose, the maintainer of the OZI project.
I am a freelance developer. Code is a way I express myself.
In the past I have fallen into the trap of only writing hobby projects.
I enjoyed those very much but am wanting something less substantial but more community-focused.
Python is the programming language I use the most.
The Python community needs ways to reduce the packaging learning curve.

The OZI project focuses on packaging Python modules with Meson.

Let's talk about about OZI in-the-large:

* I want a way to ensure all the semantic information related to packaging is itself packaged and versioned.
* I want a complete solution for packaging that pragmatically defers to third-party utility.
* I want small boilerplate build scripts.
* I want a standardized API.
* I want checkpointing for the distribution, documentation, linting, and testing utility environment.

### Pragmatic Deferal

#### 18-Aug-2023

In many cases coverage reports will indicate blocks of code that writing a test for would amount to
implementing a sanity check of the principal and reimplementing their test cases.

e.g. looping over simplicial types:
```
# pragma: defer to python
```
