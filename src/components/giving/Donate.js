import React from 'react';

/**
 * Donate links out to East Side Baptist Church's hosted Tithe.ly giving page.
 * This avoids embedding Tithe.ly's widget script directly in our site (which
 * was breaking after Tithe.ly retired the old v3 widget / church-id system),
 * and instead sends users to Tithe.ly's own hosted, fully-supported page.
 */
const GIVING_FORM_URL =
  'https://give.tithe.ly/?formId=84b682b9-1db2-4163-879e-ccabcbecf7d2';

const Donate = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p
        style={{
          color: '#2e2e2e',
          fontFamily: 'Georgia, serif',
          fontSize: '18px',
          margin: '0 0 20px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '10px',
        }}
      >
        We at East Side Baptist Church are profoundly grateful for your support and generosity.
        Your contributions empower us to continue our mission and serve our community with love and grace.
        Thank you for being a vital part of our church family.
      </p>
      
      <a
        href={GIVING_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#0C2D57',
          fontFamily: 'inherit',
          fontWeight: 'bold',
          fontSize: '19px',
          padding: '15px 70px',
          borderRadius: '4px',
          cursor: 'pointer',
          color: 'white',
          textDecoration: 'none',
          border: 'none',
          margin: 20,
        }}
      >
        Donate
      </a>
    </div>
  );
};

export default Donate;