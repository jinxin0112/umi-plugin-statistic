import { join } from 'path';

export default {
  plugins: [[join(__dirname, '..', 'lib', 'index.js'), {
    token: '23333',    
  }]]
};
