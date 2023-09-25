# Blog

## Progress Update

### Post #7 25-Sep-2023

So I am *very* pleased with the current state of OZI. I am confident an Alpha can start before year end. To that end I will need to update ``blastpipe`` to be created from the OZI publishing scripts, ``ozi-new`` and ``ozi-fix``. It is likely that we will need to rethink the mechanics of integration into the OZI release process. Currently it gets very confused about the path if you run ``blastpipe`` as a subproject. That is, it attempts to run from the toplevel project directory.

## Alpha Progress and Project Relicensing

### Post #6 16-Sep-2023

As of 13-Sept-2023 I have switched the main repository license to Apache-2.0 WITH LLVM-Exception.
This will reduce the burden of notice and attribution on projects published by OZI's end users using the ``ozi-new`` tool.

Over the past week I have been working on making the publishing script ``ozi-new`` support PEP639's potential changes to PyPA classifiers. Until the Python Packaging Authority accepts or rejects PEP639
we will warn users who select an ambiguous License classifier to clarify it with License-Expression and License-File keys. Currently these keys are slated for implementation in Metadata-Version 2.4. 

Until then we are using a comment at the top of the PKG-INFO payload e.g.
```php
.. OZI
  Classifier: License-Expression :: [SPDX-License-Expression]
  Classifier: License-File :: LICENSE.txt
```

The majority of the Pre-Alpha work remaining will be documentation related.

## OZI Matriculation to Alpha

### Post #5 30-Aug-2023

This is what will need to happen before working on an Alpha version for PyPI:
* Update standard documentation snippets due to a major version change from semantic-version 7 to 8.
* Satisfy the following Best Practices silver attestations:

  * [dco]
  * [governance]
  * [roles_responsibilities]
  * [documentation_roadmap] - Need to write
  * [documentation_security] - Need to write
  * [documentation_quick_start]
    * 1. Write create project script.
    * 2. Write a guide for install and create project.
  * [accessibility_best_practices]
  * [internationalization]
  * [maintenance_or_update]
  * [vulnerability_response_process]
  * [automated_integration_testing] - should release a test log artifact
  * [regression_tests_added50]
  * [test_policy_mandated] - need to clarify policy in OZI.docs
  * [implement_secure_design]
  * [hardening]
  * [assurance_case](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/security.md)

## OZI Homepage Layout Changes

### Post #4 24-Aug-2023

The project website is reasonably done style and mobile support wise.
I strived to match the style of our [documentation](https://docs.oziproject.dev/) subdomain.
I have kept the minimal theme code block styling for now until I want to figure out styling.
Back to working on the actual codebase...

## coverage and pragma: defer

### Post #3 19-Aug-2023

This is the standard snippet I have been using:

```toml
[tool.coverage.report]
exclude_lines = [
    "#\\s*(pragma|PRAGMA)[:\\s]?\\s*(no|NO)\\s*(cover|COVER)",
    "#\\s*(pragma|PRAGMA)[:\\s]?\\s*(defer|DEFER)\\s*(to|TO)\\s*[a-zA-Z0-9_]*",
    ...
]
```

## Personal Introduction

### Post #2 18-Aug-2023

I am Eden Rose, the maintainer of the OZI project.
I am a freelance developer. Code is a way I express myself.
In the past I have fallen into the trap of only writing hobby projects.
I enjoyed those very much but am wanting something less substantial but more community-focused.
Python is the programming language I use the most.
The Python community needs ways to reduce the packaging learning curve.

## OZI in-the-large

### Post #1 18-Aug-2023

The OZI project focuses on packaging Python modules with Meson.

Let's talk about about OZI in-the-large:

* I want a way to ensure all the semantic information related to packaging is itself packaged and versioned.
* I want a complete solution for packaging that pragmatically defers to third-party utility.
* I want small boilerplate build scripts.
* I want a standardized API.
* I want checkpointing for the distribution, documentation, linting, and testing utility environment.

## Pragmatic Deferal

### Post #0 18-Aug-2023

In many cases coverage reports will indicate blocks of code that writing a test for would amount to
implementing a sanity check of the principal and reimplementing their test cases.

e.g. looping over simplicial types:

```python3
# pragma: defer to python
```

[Back to Home](./README.md)
