export const initSchemaMock = {
  initial: { on: { NEXT: 'print' } },
  print: { on: { NEXT: 'reader' } },
  reader: { on: { NEXT: 'printFile', FAILURE: 'errorRidder' } },
  errorRidder: { on: { NEXT: 'printFile', FAILURE: 'endError' } },
  printFile: { on: { NEXT: 'finish' } },
  finish: { on: { NEXT: 'initial' } },
  endError: { on: { RETRY: 'endError' } },
};

export const initStateMock = 'initial';

export const SchemaSteps = {
  initial: 'initial',
  print: 'print',
  reader: 'reader',
  errorRidder: 'errorRidder',
  printFile: 'printFile',
  finish: 'finish',
  endError: 'endError',
};

export const stepsSuccess = [SchemaSteps.initial, SchemaSteps.print, SchemaSteps.reader, SchemaSteps.printFile, SchemaSteps.finish];

export const stepsSFiler = [SchemaSteps.initial, SchemaSteps.print, SchemaSteps.errorRidder, SchemaSteps.endError];
