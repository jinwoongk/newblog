import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>

		<div className='App'>
			<br/>
			<h1>Coupang Partners</h1>
			<h2>통합검색</h2>
			<p>
				<iframe src="https://coupa.ng/b1EjV8" width="100%" height="36" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
			</p>
			<h3>관심 상품</h3>
			<p>
				<iframe
				src="https://ads-partners.coupang.com/widgets.html?id=490921&template=carousel&trackingCode=AF7354022&subId=&width=680&height=140"
				width="680" height="140" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
			</p>
			<br/>
		</div>
      </div>
    </Layout>
  );
}