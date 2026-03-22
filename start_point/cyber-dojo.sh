
FORCE_COLOR=0 # disable colour
PATH=/home/sandbox/node_modules/@cucumber/cucumber/bin:${PATH}

if [ -f .jshintrc ]; then
  jshint --config .jshintrc *.js
fi

if [ $? == 0 ]; then
  cd /home/sandbox
  cucumber-js \
    ${CYBER_DOJO_SANDBOX}/*.feature
fi
