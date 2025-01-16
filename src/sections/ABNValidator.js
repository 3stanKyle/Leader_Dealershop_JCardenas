import React, { useState, useEffect, useCallback } from 'react';

const ABNValidator = ({ onValidABN }) => {
  const [abn, setAbn] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  // Validate ABN format (11 digits)
  const isValidFormat = (value) => {
    return /^\d{11}$/.test(value.replace(/\s/g, ''));
  };

  // Mock API call to validate ABN
  const validateABN = async (value) => {
    // Simulating API call to ABN lookup service
    return new Promise((resolve) => {
      setTimeout(() => {
        // For demo purposes, consider "00000000000" as invalid
        resolve(value.replace(/\s/g, '') !== '00000000000');
      }, 1000);
    });
  };

  // Debounced validation function
  const debouncedValidate = useCallback(async (value) => {
    if (!value) {
      setError('');
      setIsValid(false);
      return;
    }

    if (!isValidFormat(value)) {
      setError('Please enter a valid 11-digit ABN');
      setIsValid(false);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const isValidABN = await validateABN(value);
      
      if (isValidABN) {
        setIsValid(true);
        setError('');
        onValidABN?.(value);
      } else {
        setIsValid(false);
        setError('ABN not found in the registry');
      }
    } catch (err) {
      setError('Error validating ABN. Please try again.');
      setIsValid(false);
    } finally {
      setIsLoading(false);
    }
  }, [onValidABN]);

  const handleABNChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and spaces
    if (/^[\d\s]*$/.test(value)) {
      setAbn(value);
      
      // Clear previous timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set new timeout for debouncing
      const newTimeoutId = setTimeout(() => {
        debouncedValidate(value);
      }, 500);
      
      setTimeoutId(newTimeoutId);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label htmlFor="abn" style={{ fontWeight: '500' }}>
        Your ABN
      </label>
      
      <div style={{ position: 'relative' }}>
        <input
          id="abn"
          type="text"
          value={abn}
          onChange={handleABNChange}
          placeholder="Enter your 11-digit ABN"
          style={{
            width: '100%',
            padding: '8px 12px',
            paddingRight: '40px',
            borderRadius: '4px',
            border: `2px solid ${
              isValid ? '#22c55e' : error ? '#ef4444' : '#e5e7eb'
            }`,
            outline: 'none',
          }}
          maxLength={14}
        />
        
        <div style={{ 
          position: 'absolute', 
          right: '12px', 
          top: '50%', 
          transform: 'translateY(-50%)'
        }}>
          {isLoading && (
            <div style={{ 
              width: '16px', 
              height: '16px', 
              border: '2px solid #e5e7eb',
              borderTop: '2px solid #3b82f6',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }} />
          )}
          {isValid && !isLoading && (
            <span style={{ color: '#22c55e' }}>✓</span>
          )}
          {error && !isLoading && (
            <span style={{ color: '#ef4444' }}>!</span>
          )}
        </div>
      </div>
      
      {error && (
        <div style={{
          padding: '8px 12px',
          backgroundColor: '#fef2f2',
          border: '1px solid #ef4444',
          borderRadius: '4px',
          color: '#ef4444',
          fontSize: '14px'
        }}>
          {error}
        </div>
      )}
      
      {isValid && (
        <div style={{
          padding: '8px 12px',
          backgroundColor: '#f0fdf4',
          border: '1px solid #22c55e',
          borderRadius: '4px',
          color: '#15803d',
          fontSize: '14px'
        }}>
          ABN validated successfully
        </div>
      )}
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ABNValidator;