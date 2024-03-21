import './RightEmail.css';
function RightEmail() {
  return (
    <div className="right-container" style={{ marginLeft: '40px' }}>
      <div className="first-container">
        <input
          placeholder="받는 사람 주소를 입력해주세요!"
          style={{ width: '340px' }}
        />
        <div style={{ border: '1px solid green', width: '150px' }}>참조</div>
      </div>
      <div style={{ border: '2px solid blue', height: '600px' }}></div>
      <div className="last-container">
        <input
          placeholder="보내는 사람 주소를 입력해주세요!"
          style={{ width: '340px' }}
        />
        <button
          style={{
            width: '150px',
            height: '35px',
            borderRadius: '200px',
            backgroundColor: '#0E57CB',
            border: 'none',
            marginTop: '15px',
          }}
        />
      </div>
    </div>
  );
}

export default RightEmail;
