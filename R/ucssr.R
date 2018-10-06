#' Open slides, or their Rmarkdown files.
#' 
#' @param vignette The vignette to open, either
#' @export ucssr_open_file
#' @importFrom rstudioapi navigateToFile
#' @rdname ucssr
#' @examples 
#' \dontrun{
#' ucssr_open_file("kwic")
#' }
ucssr_open_file <- function(vignette = c("index.Rmd", "corpora.Rmd", "subcorpora.Rmd", "counting.Rmd", "kwic.Rmd", "cqp.Rmd", "sentiments.Rmd")){
  file_to_open <- match.arg(vignette, choices = c("index.Rmd", "corpora.Rmd", "subcorpora.Rmd", "counting.Rmd", "kwic.Rmd", "cqp.Rmd", "sentiments.Rmd"))
  navigateToFile(file = system.file(package = "UCSSR", "doc", file_to_open))
}


#' @export ucssr_browse
#' @rdname ucssr
#' @examples 
#' \dontrun{
#' ucssr_browse("cqp")
#' }
ucssr_browse <- function(vignette = c("index.html", "corpora.html", "subcorpora.html", "counting.html", "kwic.html", "cqp.html", "sentiments.html")){
  file_to_open <- match.arg(vignette, choices = c("index.html", "corpora.html", "subcorpora.html", "counting.html", "kwic.html", "cqp.html", "sentiments.html"))
  browseURL(url = system.file(package = "UCSSR", "doc", file_to_open))
}