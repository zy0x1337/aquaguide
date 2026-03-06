import type { UnitSystem, TempUnit } from '../hooks/useSettings';

// ========================================
// LENGTH CONVERSIONS
// ========================================

/**
 * Convert length between metric (cm) and imperial (inches)
 */
export const convertLength = (value: number, targetSystem: UnitSystem): number => {
  if (targetSystem === 'imperial') {
    return value / 2.54; // cm to inches
  }
  return value; // already in cm
};

/**
 * Format length with appropriate unit
 */
export const formatLength = (valueInCm: number, system: UnitSystem, decimals = 1): string => {
  const converted = convertLength(valueInCm, system);
  const unit = system === 'metric' ? 'cm' : 'in';
  return `${converted.toFixed(decimals)} ${unit}`;
};

// ========================================
// VOLUME CONVERSIONS
// ========================================

/**
 * Convert volume between metric (liters) and imperial (gallons)
 */
export const convertVolume = (value: number, targetSystem: UnitSystem): number => {
  if (targetSystem === 'imperial') {
    return value / 3.78541; // liters to US gallons
  }
  return value; // already in liters
};

/**
 * Format volume with appropriate unit
 */
export const formatVolume = (valueInLiters: number, system: UnitSystem, decimals = 1): string => {
  const converted = convertVolume(valueInLiters, system);
  const unit = system === 'metric' ? 'L' : 'gal';
  return `${converted.toFixed(decimals)} ${unit}`;
};

// ========================================
// WEIGHT CONVERSIONS
// ========================================

/**
 * Convert weight between metric (grams) and imperial (ounces)
 */
export const convertWeight = (value: number, targetSystem: UnitSystem): number => {
  if (targetSystem === 'imperial') {
    return value / 28.3495; // grams to ounces
  }
  return value; // already in grams
};

/**
 * Format weight with appropriate unit
 */
export const formatWeight = (valueInGrams: number, system: UnitSystem, decimals = 1): string => {
  const converted = convertWeight(valueInGrams, system);
  
  if (system === 'metric') {
    if (valueInGrams >= 1000) {
      return `${(valueInGrams / 1000).toFixed(decimals)} kg`;
    }
    return `${valueInGrams.toFixed(decimals)} g`;
  } else {
    if (converted >= 16) {
      return `${(converted / 16).toFixed(decimals)} lb`;
    }
    return `${converted.toFixed(decimals)} oz`;
  }
};

// ========================================
// TEMPERATURE CONVERSIONS
// ========================================

/**
 * Convert temperature between Celsius and Fahrenheit
 */
export const convertTemp = (value: number, targetUnit: TempUnit): number => {
  if (targetUnit === 'fahrenheit') {
    return (value * 9/5) + 32; // Celsius to Fahrenheit
  }
  return value; // already in Celsius
};

/**
 * Format temperature with appropriate unit
 */
export const formatTemp = (valueInCelsius: number, unit: TempUnit, decimals = 1): string => {
  const converted = convertTemp(valueInCelsius, unit);
  const symbol = unit === 'celsius' ? '°C' : '°F';
  return `${converted.toFixed(decimals)}${symbol}`;
};

/**
 * Format temperature range
 */
export const formatTempRange = (minC: number, maxC: number, unit: TempUnit, decimals = 1): string => {
  const minConverted = convertTemp(minC, unit);
  const maxConverted = convertTemp(maxC, unit);
  const symbol = unit === 'celsius' ? '°C' : '°F';
  return `${minConverted.toFixed(decimals)} - ${maxConverted.toFixed(decimals)}${symbol}`;
};

// ========================================
// PH & WATER PARAMETERS (no conversion needed)
// ========================================

/**
 * Format pH range
 */
export const formatPHRange = (min: number, max: number, decimals = 1): string => {
  return `${min.toFixed(decimals)} - ${max.toFixed(decimals)}`;
};

/**
 * Format hardness (dGH/dKH)
 */
export const formatHardness = (value: number, decimals = 0): string => {
  return `${value.toFixed(decimals)} dGH`;
};

// ========================================
// TANK DIMENSIONS
// ========================================

/**
 * Format tank dimensions (length x width x height)
 */
export const formatTankDimensions = (
  lengthCm: number,
  widthCm: number,
  heightCm: number,
  system: UnitSystem
): string => {
  const l = convertLength(lengthCm, system);
  const w = convertLength(widthCm, system);
  const h = convertLength(heightCm, system);
  const unit = system === 'metric' ? 'cm' : 'in';
  return `${l.toFixed(0)} × ${w.toFixed(0)} × ${h.toFixed(0)} ${unit}`;
};

/**
 * Calculate tank volume from dimensions (in cm)
 */
export const calculateTankVolume = (
  lengthCm: number,
  widthCm: number,
  heightCm: number
): number => {
  // Volume in cm³, convert to liters
  return (lengthCm * widthCm * heightCm) / 1000;
};

// ========================================
// HELPERS
// ========================================

/**
 * Parse numeric value from string (handles both . and , as decimal separator)
 */
export const parseNumeric = (value: string): number => {
  return parseFloat(value.replace(',', '.'));
};
