/**
 * Generates a unique ID
 *
 * @param {string} prefix - Generated ID prefix
 * @returns {string} - Generated ID
 */
export const useUniqueID = (prefix: string = 'id'): string => `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
