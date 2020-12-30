import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

//memorizing the directory section 
export const selectedDirectorySection = createSelector([selectDirectory], directory => directory.section );