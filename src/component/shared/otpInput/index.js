import OtpInput from 'react-otp-input';

function CustomInput({ otp, setOtp }) {
    return (
        <OtpInput
            className="otp-input"
            containerStyle={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            inputStyle={{
                width: '50px',
                height: '50px',
                fontSize: '24px',
                textAlign: 'center',
                border: '1px solid #ccc',
                borderRadius: '5px',
                margin: '0 5px',
                display: 'flex',
                justifyContent: 'center',
            }}
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
        />
    )
}

export default CustomInput