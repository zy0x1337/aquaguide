import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toast } from '../Toast';
import { describe, it, expect, vi } from 'vitest';

describe('Toast Component', () => {
  const defaultProps = {
    id: 'test-id',
    message: 'Test message',
    onClose: vi.fn(),
  };

  it('renders toast message correctly', () => {
    render(<Toast {...defaultProps} />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('auto-closes after duration', async () => {
    const onClose = vi.fn();
    render(<Toast {...defaultProps} onClose={onClose} duration={100} />);
    
    // Wait for exit animation + unmount
    await waitFor(() => expect(onClose).toHaveBeenCalledWith('test-id'), { timeout: 1000 });
  });

  it('closes when X button is clicked', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    render(<Toast {...defaultProps} onClose={onClose} />);
    
    const closeButton = screen.getByLabelText('Close notification');
    await user.click(closeButton);
    
    await waitFor(() => expect(onClose).toHaveBeenCalledWith('test-id'));
  });

  it('renders correct icon for type', () => {
    const { rerender } = render(<Toast {...defaultProps} type="success" />);
    // Checking for Alert role which container has
    expect(screen.getByRole('alert')).toHaveClass('bg-emerald-500');
    
    rerender(<Toast {...defaultProps} type="error" />);
    expect(screen.getByRole('alert')).toHaveClass('bg-rose-500');
  });
});
