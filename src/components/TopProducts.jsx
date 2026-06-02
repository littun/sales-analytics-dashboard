import './DashboardWidgets.css';

const products = [
  { id: '01', name: 'Home Decor Range', popularity: 45, color: '#0095ff' },
  { id: '02', name: 'Disney Princess Pink Bag 18\'', popularity: 29, color: '#00e096' },
  { id: '03', name: 'Bathroom Essentials', popularity: 18, color: '#8884d8' },
  { id: '04', name: 'Apple Smartwatches', popularity: 25, color: '#ffaa00' },
];

const TopProducts = () => {
  return (
    <div className="top-products h-100 d-flex" style={{ flexDirection: 'column' }}>
      <div className="widget-header">
        <h3 className="widget-title">Top Products</h3>
      </div>
      
      <div className="products-table">
        <div className="table-header" style={{ display: 'flex', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0', fontSize: '12px', color: '#8c8c8c' }}>
          <div style={{ width: '40px' }}>#</div>
          <div style={{ flex: 1 }}>Name</div>
          <div style={{ width: '100px' }}>Popularity</div>
          <div style={{ width: '60px', textAlign: 'right' }}>Sales</div>
        </div>
        
        <div className="table-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#1e1e1e' }}>
              <div style={{ width: '40px' }}>{product.id}</div>
              <div style={{ flex: 1, fontWeight: '500' }}>{product.name}</div>
              <div style={{ width: '100px' }}>
                <div style={{ width: '100%', height: '4px', backgroundColor: '#f0f0f0', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: `${product.popularity}%`, height: '100%', backgroundColor: product.color, borderRadius: '2px' }}></div>
                </div>
              </div>
              <div style={{ width: '60px', textAlign: 'right' }}>
                <span style={{ border: `1px solid ${product.color}`, color: product.color, padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: '500' }}>
                  {product.popularity}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
