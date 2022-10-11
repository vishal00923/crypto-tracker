export const sxStyles = {
  sidebar: {
    width: '520px',
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
    width: '190px',
    height: '190px',
    objectFit: 'contain',
  },

  sidebarBox1Name: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: '1.725rem',
    marginBottom: '16px',
  },

  sidebarBox2SubTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '1.125rem',
    textTransform: 'uppercase',
    textDecoration: 'underline',
  },

  sidebarWatchlist: {
    marginTop: '16px',
    width: '100%',
    height: '60%',
    overflowY: 'scroll',
    marginBottom: '20px',
  },

  sidebarWatchlistItem: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    padding: '8px 16px',
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
