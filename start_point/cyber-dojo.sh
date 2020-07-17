
PATH=/home/sandbox/node_modules/cucumber/bin:${PATH}

if [ -f .jshintrc ]; then
  jshint --config .jshintrc *.js
fi

if [ $? == 0 ]; then
  cd /home/sandbox
  cucumber-js \
    --format-options '{"colorsEnabled":false}' \
    ${CYBER_DOJO_SANDBOX}/*.feature
fi
