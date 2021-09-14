import { ButtonBase, ButtonBaseProps } from './ButtonBase';

export function IconButton(props: ButtonBaseProps) {
  return (
    <ButtonBase
      {...props}
      color="ghost"
      css={{ px: '$1', py: '$1', borderColor: 'transparent' }}
    />
  );
}
