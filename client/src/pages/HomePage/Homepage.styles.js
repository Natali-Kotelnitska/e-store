const Styles = {
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
  },

  cardContent: {
    flexGrow: 1,
  },
};

export default Styles;
