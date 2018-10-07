topics <- c("index", "corpora", "subcorpora", "counting", "kwic", "cqp", "sentiments")

#' Open slides, or their Rmarkdown files.
#' 
#' The package includes a set of slides that introduce the functionality of
#' the polmineR package, including workflows and recipes to address specific
#' typical problems.
#' 
#' @param topic A character string giving the name of the vignette to
#'   view. If omitted, all vignettes from all installed packages are listed.
#' @export open_rmarkdown
#' @importFrom rstudioapi navigateToFile
#' @rdname ucssr
#' @examples 
#' \dontrun{
#' open_rmarkdown("kwic")
#' }
open_rmarkdown <- function(topic = c("index.Rmd", "corpora.Rmd", "subcorpora.Rmd", "counting.Rmd", "kwic.Rmd", "cqp.Rmd", "sentiments.Rmd")){
  rmd_files <- paste(topics, "Rmd", sep = ".")
  if (!missing(topic)){
    file_to_open <- match.arg(topic, choices = rmd_files)
    navigateToFile(file = system.file(package = "UCSSR", "doc", file_to_open))
  } else {
    message("Please indicate a topic. Available Rmarkdown files that the vignettes in this package are based on are:\n", paste(rmd_files, collapse = " / "))
    invisible( NULL )
  }
}


#' @export slides
#' @rdname ucssr
#' @examples 
#' \dontrun{
#' slides("cqp")
#' }
slides <- function(topic = c("index.html", "corpora.html", "subcorpora.html", "counting.html", "kwic.html", "cqp.html", "sentiments.html")){
  html_files <- paste(topics, "html", sep = ".")
  if (!missing(topic)){
    file_to_open <- match.arg(topic, choices = html_files)
    browseURL(url = system.file(package = "UCSSR", "doc", file_to_open))
  } else {
    message("Please indicate a topic. Available Rmarkdown files that the vignettes in this package are based on are:\n", paste(html_files, collapse = " / "))
    invisible( NULL )
    
  }
}