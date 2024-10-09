import { Request, Response } from 'express';
import pool from '../db/postgres';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query('SELECT id, name, email, phone_number, address, city, country, postal_code, created_at, updated_at, is_verified, avatar_url FROM users');
    res.json({ users: rows });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, phone_number, address, city, country, postal_code } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO users (name, email, phone_number, address, city, country, postal_code, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW()) RETURNING id, name, email, phone_number, address, city, country, postal_code, created_at, updated_at, is_verified, avatar_url',
      [name, email, phone_number, address, city, country, postal_code]
    );
    res.status(201).json({ user: rows[0] });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT id, name, email, phone_number, address, city, country, postal_code, created_at, updated_at, is_verified, avatar_url FROM users WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user: rows[0] });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone_number, address, city, country, postal_code } = req.body;
    const { rows } = await pool.query(
      'UPDATE users SET name = $1, email = $2, phone_number = $3, address = $4, city = $5, country = $6, postal_code = $7, updated_at = NOW() WHERE id = $8 RETURNING id, name, email, phone_number, address, city, country, postal_code, created_at, updated_at, is_verified, avatar_url',
      [name, email, phone_number, address, city, country, postal_code, id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user: rows[0] });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully', id: rows[0].id });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};