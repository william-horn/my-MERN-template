

import { v4 as uuidv4 } from 'uuid';

const PublicState = (fc) => {
  this._id = uuidv4();
  const _fc = () => fc();
  return { initial: fc, _fc }
}

export default PublicState;


