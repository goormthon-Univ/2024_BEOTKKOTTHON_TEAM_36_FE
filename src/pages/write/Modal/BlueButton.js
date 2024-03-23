import { Button, Flex } from '@radix-ui/themes';

const BlueButton = ({ children, className, style: userStyle, ...props }) => {
  const isReverse = className?.includes('reverse');
  const defaultStyle = {
    width: '242px',
    height: '70px',
    borderRadius: '100px',
    fontSize: '21px',
    fontFamily: 'AppleSDGothicNeoB00',
    fontWeight: '400',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: isReverse ? 'transparent' : 'var(--buttem, #0E57CB)',
    boxShadow:
      '0px 4px 7px 0px rgba(0, 0, 0, 0.20), 1px 1px 11px 0px rgba(0, 0, 0, 0.15) inset',
    color: isReverse ? 'black' : 'white',

    ...userStyle,
  };
  return (
    <Flex gap="3" mt="4" justify="end">
      <Button
        style={defaultStyle}
        className={className}
        {...props} // onClick 등의 나머지 props를 전달
      >
        {children}
      </Button>
    </Flex>
  );
};

export default BlueButton;
