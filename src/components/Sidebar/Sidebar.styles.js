export const sxStyles = {
  sidebar: {
    width: {
      xs: '320px',
      sm: '380px',
      md: '440px',
      lg: '500px',
      xl: '580px',
    },
    height: '100%',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1b1a22',
  },

  sidebarBox1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },

  sidebarBox1Avatar: {
    width: {
      xs: '80px',
      sm: '120px',
      md: '150px',
      lg: '180px',
    },
    height: {
      xs: '80px',
      sm: '120px',
      md: '150px',
      lg: '180px',
    },
    objectFit: 'contain',
  },

  sidebarBox1Name: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: {
      xs: '1.425rem',
      sm: '1.625rem',
      md: '2.25rem',
      lg: '2.25rem',
      xl: '2.25rem',
    },
    marginBottom: '16px',
  },

  sidebarBox2SubTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: {
      xs: '.925rem',
      sm: '1rem',
      md: '1.25rem',
      lg: '1.25rem',
    },
    textTransform: 'uppercase',
    textDecoration: 'underline',
  },

  sidebarWatchlist: {
    marginTop: '16px',
    height: { xs: '100%' },
    overflowY: 'scroll',
    marginBottom: '20px',
  },

  sidebarWatchlistItem: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: { xs: '4px 6px', sm: '8px 12px' },
    marginBottom: '10px',
  },

  logoutBtn: {
    color: '#000',
    width: '100%',
    outline: 'none',
    padding: '8px 0',
    fontWeight: '700',
    backgroundColor: '#EEBC1D',
    '&:hover': {
      backgroundColor: '#EEBC1D',
    },
  },
};
