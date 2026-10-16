
lambda { |stdout,stderr,status|
  output = stdout + stderr
  js_hint_pattern = /^(\d+) error(s?)/
  return :amber if js_hint_pattern.match(output)
  # cucumber lists the passed count before the failed one, so failed can sit
  # anywhere inside the summary's parentheses.
  return :red   if /^\d+ scenarios? \([^)]*\d+ failed/.match(output)
  # Green rests on cucumber's own summary saying every scenario it ran passed,
  # and on there having been one to run. Tying it to the scenario count is what
  # keeps a run that found no scenario from reading as a pass.
  return :green if /^[1-9]\d* scenarios? \(\d+ passed\)$/.match(output)
  return :amber
}
