# codeclimate-eslint6-bug

To reproduce [issue 472](https://github.com/codeclimate/codeclimate-eslint/issues/472), run the following (assuming `codeclimate analyze` version 0.85.6 is already installed locally):
``` shell
npm install
# note no errors
run run lint
# note no errors
npm run test:pass
# note errors and the below error message
npm run test:fail
```

When running the above `test:fail` script, note that the log contains the following (this was copied from the [failing output log](logs/failing_output.log)):
```
D, [2019-11-22T18:44:51.824872 #1] DEBUG -- : engine stderr: No rules are configured. Make sure you have added a config file with rules enabled.
D, [2019-11-22T18:44:51.825827 #1] DEBUG -- : engine stderr: See our documentation at https://docs.codeclimate.com/docs/eslint for more information.
```

Also note the same "No rules are configured" error is logged in the build output on [Code Climate](https://codeclimate.com/github/nick-invision/codeclimate-eslint6-bug/builds/2)