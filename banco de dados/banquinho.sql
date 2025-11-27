CREATE DATABASE agua_gas_delivery;
GO

DROP TABLE clientes

-- 1. clientes
CREATE TABLE clientes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    telefone NVARCHAR(20),
    email NVARCHAR(100),
    endereco NVARCHAR(255),
    data_cadastro DATETIME NOT NULL DEFAULT GETDATE()
);

-- 2. produtos
CREATE TABLE produtos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    descricao NVARCHAR(255),
    preco DECIMAL(10,2) NOT NULL,
    ativo BIT NOT NULL DEFAULT 1
);

-- 3. pedidos
CREATE TABLE pedidos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    cliente_id INT NOT NULL,
    data_pedido DATETIME NOT NULL DEFAULT GETDATE(),
    status NVARCHAR(20) NOT NULL DEFAULT 'pendente',
    valor_total DECIMAL(10,2) NOT NULL,
    endereco_entrega NVARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- 4. itens_pedido
CREATE TABLE itens_pedido (
    id INT IDENTITY(1,1) PRIMARY KEY,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- 5. fidelidade
CREATE TABLE fidelidade (
    id INT IDENTITY(1,1) PRIMARY KEY,
    cliente_id INT NOT NULL,
    compras_agua INT NOT NULL DEFAULT 0,
    data_ultima_compra DATE,
    bonus_disponivel BIT NOT NULL DEFAULT 0,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- 6. funcionarios 
CREATE TABLE funcionarios (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    telefone NVARCHAR(20),
    ocupacao NVARCHAR(50)
);

-- 7. instalacoes
CREATE TABLE instalacoes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    pedido_id INT NOT NULL,
    tecnico_id INT NOT NULL,
    data_instalacao DATETIME NOT NULL,
    observacoes NVARCHAR(255),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (tecnico_id) REFERENCES funcionarios(id)
);

-- 8. mensagens_contato
CREATE TABLE mensagens_contato (
    id INT IDENTITY(1,1) PRIMARY KEY,
    cliente_id INT NULL,
    nome NVARCHAR(100) NOT NULL,
    telefone NVARCHAR(20),
    email NVARCHAR(100),
    mensagem NVARCHAR(MAX) NOT NULL,
    data_envio DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);