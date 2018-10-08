
<!-- README.md is generated from README.Rmd. Please edit that file -->

[![License: CC
BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

# Using Corpora in Social Science Research (UCSSR)

## About the UCSSR package

The UCSSR package offers teaching materials on using corpora in social
science research for R users. At this stage, the package includes
several vignettes which render into html slides. The slides are also
hosted at the [GitHub Pages of the UCSSR
package](https://polmine.github.io/UCSSR).

It relies on the polmineR package and requires users to have basic R
knowledge. At this stage of its development, the data used in examples
is GermaParl, a corpus of debates in the German Bundestag. The language
of the slides is German.

## Installation

There are two reasons for installing the package:

  - you want to work with the slides offline;
  - you want to have convenient access to the Rmarkdown files the slides
    are based on (see Usage).

To keep installation requirements minimal, the package is hosted via the
drat repository of the PolMine Project.

``` r
install.packages("drat")
drat::addRepo("polmine")
install.packages("UCSSR")
```

To be able to run examples, you will need an installation of the
GermaParl corpus. It is shipped as a package and is available via the
drat repository of the PolMine Project. Upon installation, the GermaParl
package only includes minimal data for testing purposes. The full corpus
can be downloaded after package installation from a webspace of the
PolMine Project.

``` r
drat::addRepo("polmine")
install.packages("GermaParl")
GermaParl::germaparl_download_corpus()
```

Packages used in the examples can be installed from CRAN.

``` r
pkgs <- c("devtools", "data.table", "xts", "lubridate", "DT")
install.packages(pkgs)
```

If you prefer to build the html-slides yourself, install the package
from GitHub.

``` r
devtools::install_github("PolMine/UCSSR")
```

## Usage

The `slides()`-function will open a slide in your default browser. Call
the function without any argument to learn which slides are
    available.

``` r
UCSSR::slides()
```

    ## Please indicate a topic. Available Rmarkdown files that the vignettes in this package are based on are:
    ## index.html / corpora.html / subcorpora.html / counting.html / kwic.html / cqp.html / sentiments.html

Indicate the topic to open the slide you want to use. The file extension
(“.html”) can be omitted.

``` r
UCSSR::slides("corpora")
```

If you want to run examples yourself, or if you want to copy code, play
around with it, or re-use it for your own analysis, it may be convenient
to open the Rmarkdown file the slide has been generated from. The
function requires that you work in an RStudio session.

``` r
UCSSR::open_rmarkdown()
```

## Further development

The package is still at an early stage of its development. Planned steps
are:

  - to expand the set of slides and to cover more topics;

  - to translate everything and to use an English corpus.

Eventually, the teaching material might develop into a book, but I am
not yet sure how the (limited) interactivity can be maintained on paper.

## License

The license of the package is the [Creative Commoms license
BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/):

  - **BY**: Authorship needs to be attributed;
  - **NC**: Only non-commercial usage is allowed;
  - **SA**: Share alike, anything derived from UCSSR may not be put
    under a less restrictive license than the original CC license.

If your research benefits from using UCSSR, I suggest to quote the
package as follows.

Blätte, Andreas (2018): Using Corpora in Social Science Research
(UCSSR). Available at: <https:://https://polmine.github.io/UCSSR>.
