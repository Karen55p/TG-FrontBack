import { error } from 'console';
import { openDb } from './index';

export const insertCliente = async (nome: string, telefone: string, cpf: number, endereco: string, obs: string) => {
    const db = await openDb();

    if (!(nome || telefone || cpf || endereco)){
        throw error;
    } else {
        await db.get(`
        INSERT INTO cliente (nome, telefone, cpf, endereco, obs) 
        VALUES (?, ?, ?, ?, ?);
        `, [nome, telefone, cpf, endereco, obs]
        );
    }

    db.close();
};

export const selectCliente = async () => {
    const db = await openDb();
    const rows = await db.all('SELECT * FROM cliente');
        if(rows){
            return (rows);
        }
        db.close();
};

export const selectSingleCliente = async(id: string) => {
    const db = await openDb();
    const rows = await db.get('SELECT * FROM cliente where id = ?', id);
        if(rows){
            return (rows);
        }
        db.close();
};

export const updateClientes = async (id: string, nome: string, telefone: string, cpf: number, endereco: string, obs: string) => {
    const db = await openDb();
    const cliente = await db.get('select * from cliente where id = ?', [id])
    if(!cliente){
        throw error;
    } else {
        await db.run(
            'UPDATE cliente SET nome = ?, telefone = ?, cpf = ?, endereco = ?, obs = ? WHERE id = ?',
            [nome, telefone, cpf, endereco, obs, id]
        );
    };
    db.close();
};


export const deleteClientes = async (id: string) => {
    const db = await openDb();
    const cliente = await db.get('select * from cliente where id = ?', [id])
    if(!cliente){
        throw error;
    } else {
        await db.run('PRAGMA foreign_keys = ON;');
        await db.run('DELETE FROM cliente WHERE id = ?', id
        );
    }

    db.close();
};

