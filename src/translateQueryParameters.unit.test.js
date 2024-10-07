import {
  translateSummaryParameters,
  translateStatsParameters,
  translateDurationParameters,
  translateCommitsParameters,
} from './translateQueryParameters';

const safeStringify = (obj) => {
  const cache = new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        return '[Circular]';
      }
      cache.add(value);
    }
    return value;
  });
};

describe('translateQueryParameters', () => {
  const projectName = 'projectName';
  const branchNames = ['jae', 'bae', 'bae'];

  describe('translateSummaryParameters', () => {
    const startDate = 'startDate';
    const endDate = 'endDate';
    const dateRange = { startDate, endDate };

    it('gets only required parameters', () => {
      const result = translateSummaryParameters({ dateRange });
      console.log(safeStringify(result));
      expect(result).toEqual({
        start: startDate,
        end: endDate,
        project: null,
        branches: '',
      });
    });

    it('gets all parameters', () => {
      const result = translateSummaryParameters({ dateRange, projectName, branchNames });
      console.log(safeStringify(result));
      expect(result).toEqual({
        start: startDate,
        end: endDate,
        project: projectName,
        branches: 'jae,bae,bae',
      });
    });
  });

  describe('translateStatsParameters', () => {
    it('gets only required parameters', () => {
      const result = translateStatsParameters();
      console.log(safeStringify(result));
      expect(result).toEqual({
        timeout: null,
        writes_only: null,
        project: null,
      });
    });

    it('gets all parameters', () => {
      const result = translateStatsParameters({
        timeout: 'timeout',
        useWritesOnly: 'useWritesOnly',
        projectName: 'projectName',
      });
      console.log(safeStringify(result));
      expect(result).toEqual({
        timeout: 'timeout',
        writes_only: 'useWritesOnly',
        project: 'projectName',
      });
    });
  });

  describe('translateDurationParameters', () => {
    const date = 'date';

    it('gets only required parameters', () => {
      const result = translateDurationParameters({ date });
      console.log(safeStringify(result));
      expect(result).toEqual({
        date,
        project: null,
        branches: '',
      });
    });

    it('gets all parameters', () => {
      const result = translateDurationParameters({ date, projectName, branchNames });
      console.log(safeStringify(result));
      expect(result).toEqual({
        date,
        project: projectName,
        branches: 'jae,bae,bae',
      });
    });
  });

  describe('translateCommitsParameters', () => {
    it('gets only required parameters', () => {
      const result = translateCommitsParameters();
      console.log(safeStringify(result));
      expect(result).toEqual({ author: null, page: null });
    });

    it('gets all parameters', () => {
      const authorUsername = 'authorUsername';
      const pageNumber = 'pageNumber';

      const result = translateCommitsParameters({ authorUsername, pageNumber });
      console.log(safeStringify(result));
      expect(result).toEqual({
        author: authorUsername,
        page: pageNumber,
      });
    });
  });
});