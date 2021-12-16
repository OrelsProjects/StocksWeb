import moment from 'moment';

const Utils = {
  /**
   * formats date to DD/MM/YYYY
   * @author Orel Zilberman, 25.11.2021
   */
  formatDate: (date) => moment(date).format('YYYY-MM-DD'),
};

export default Utils;
