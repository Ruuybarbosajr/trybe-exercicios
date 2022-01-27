import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ValidEmail from './ValidEmail';

describe('teste de inserção de email', () => {


  test('Verificando se exitem o campo Email', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email')
  });

  test('Verifica se exite dois botões', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2);
  })

  test('Verifica se exite um botão enviar', () => {
    render(<App />);
    const btnSend = screen.getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  })

  test('verificando se o botão e o campo email estão funcionando', () => {
    render(<App />);
    const EMAIL_USER = 'exemplo@teste.com'

    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('');

    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(EMAIL_USER);
  })
})

describe('Testa se o email é válida ou não', () => {

  test('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });

  test('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });
})