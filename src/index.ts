import { TWF } from './transmitWF';
import { initSchemaMock, initStateMock, SchemaSteps, stepsSFiler, stepsSuccess } from './type';
import { readFileS, runStepsWithDelay } from './utils';

const main = async () => {
  const app = new TWF(initStateMock, initSchemaMock);
  console.log('Start');
  const handleEvent = (event: string) => {
    try {
      // console.log(`Event: ${event}`);
      app.send(event);
    } catch (error) {
      console.error(error);
    }
  };

  const handelStep = async (step: string) => {
    switch (step) {
      case SchemaSteps.initial:
        await handleEvent('NEXT');
        break;
      case SchemaSteps.print:
        console.log('Reading file...');
        await handleEvent('NEXT');
        break;
      case SchemaSteps.reader:
        // TODO file reader
        console.log("read_file_var(filename,file context)'");
        if (readFileS(true)) {
          await handleEvent('NEXT');
        } else {
          console.log('file not found');
          await handleEvent('FAILURE');
        }
        break;
      case SchemaSteps.errorRidder:
        console.log('File not found');

        if (readFileS(false)) {
          await handleEvent('FAILURE');
        }
        break;
      case SchemaSteps.printFile:
        console.log('print_file_context');
        await handleEvent('NEXT');
        break;
      case SchemaSteps.finish:
        console.log('done');
        break;
      case SchemaSteps.endError:
        console.log('Error');
        break;
      default:
        break;
    }
  };
  // runStepsWithDelay(handelStep, stepsSuccess);
  handelStep(SchemaSteps.initial);
  // runStepsWithDelay(handelStep, stepsSFiler);
};

main();
