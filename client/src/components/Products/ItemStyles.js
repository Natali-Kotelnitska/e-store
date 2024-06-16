const itemStyles = {
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
  cardHeader: {
    backgroundColor: '#f5f5f5',
  },
  cardMedia: {
    pt: '56.25%',
    mx: 4,
    mt: 2,
    borderRadius: 2,
  },
  cardContent: {
    flexGrow: 1,
  },
};

export default itemStyles;
