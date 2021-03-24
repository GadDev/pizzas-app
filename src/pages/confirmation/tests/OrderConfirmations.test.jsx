import {
	render,
	screen
} from '../../../test-utils/testing-library-utils';
import { server } from '../../../mocks/server'
import { rest } from "msw"

import { OrderConfirmation } from '../OrderConfirmation';