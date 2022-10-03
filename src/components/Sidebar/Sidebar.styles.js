export const sxStyles = {
  sidebar: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px  112px',
    backgroundColor: '#1b1a22',
  },

  sidebarBox1: {
    padding: '32px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },

  sidebarBox1Avatar: {
    width: 232,
    height: 'auto',
  },

  sidebarBox1Name: {
    fontWeight: '700',
    fontSize: '1.925rem',
  },

  sidebarBox2: {
    height: '55%',
  },

  sidebarBox2SubTitle: {
    textTransform: 'uppercase',
    textDecoration: 'underline',
    fontWeight: '700',
  },

  logoutBtn: {
    width: '50%',
    fontWeight: '700',
    color: '#000',
    backgroundColor: '#EEBC1D',
    padding: '8px 0',
    outline: 'none',
    '&:hover': {
      backgroundColor: '#EEBC1D',
    },
  },
};
