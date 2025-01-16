import React, { useState, useEffect, useCallback } from 'react';

const ABNValidatorWithForm = () => {
  const [abn, setAbn] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [companyDetails, setCompanyDetails] = useState(null);

  // Validate ABN format (11 digits)
  const isValidFormat = (value) => {
    return /^\d{11}$/.test(value.replace(/\s/g, ''));
  };

  // Mock API call to validate ABN and fetch company details
  const validateABN = async (value) => {
    // Simulating API call to ABN lookup service
    return new Promise((resolve) => {
      setTimeout(() => {
        // For demo purposes, mock company details for a valid ABN
        if (value.replace(/\s/g, '') !== '00000000000') {
          resolve({
            isValid: true,
            details: {
              companyName: 'LESLEY DIANNE MCCORMICK AND ROBERT RUSSELL MCCORMIC',
              tradingName: 'LESLEY DIANNE MCCORMICK AND ROBERT RUSSELL MCCORMIC'
            }
          });
        } else {
          resolve({ isValid: false, details: null });
        }
      }, 1000);
    });
  };

  // Debounced validation function
  const debouncedValidate = useCallback(async (value) => {
    if (!value) {
      setError('');
      setIsValid(false);
      setCompanyDetails(null);
      return;
    }

    if (!isValidFormat(value)) {
      setError('Please enter a valid 11-digit ABN');
      setIsValid(false);
      setCompanyDetails(null);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await validateABN(value);
      
      if (response.isValid) {
        setIsValid(true);
        setError('');
        setCompanyDetails(response.details);
      } else {
        setIsValid(false);
        setError('ABN not found in the registry');
        setCompanyDetails(null);
      }
    } catch (err) {
      setError('Error validating ABN. Please try again.');
      setIsValid(false);
      setCompanyDetails(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleABNChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and spaces
    if (/^[\d\s]*$/.test(value)) {
      setAbn(value);
      
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      const newTimeoutId = setTimeout(() => {
        debouncedValidate(value);
      }, 500);
      
      setTimeoutId(newTimeoutId);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="abn" style={{ fontWeight: '500', display: 'block', marginBottom: '8px' }}>
          YOUR ABN*
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
            fontSize: '14px',
            marginTop: '8px'
          }}>
            {error}
          </div>
        )}
      </div>

      {isValid && companyDetails && (
        <div style={{ 
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '20px'
        }}>
          <h2 style={{ 
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Dealer Application
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ 
                display: 'block',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                COMPANY NAME*
              </label>
              <input
                type="text"
                value={companyDetails.companyName}
                readOnly
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#f9fafb'
                }}
              />
            </div>
            
            <div>
              <label style={{ 
                display: 'block',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                TRADING NAME*
              </label>
              <input
                type="text"
                value={companyDetails.tradingName}
                readOnly
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#f9fafb'
                }}
              />
            </div>
          </div>
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

export default ABNValidatorWithForm;