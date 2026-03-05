import type { Request, Response, NextFunction } from 'express';

/**
 * Middleware de seguridad básico.
 * Verifica que las peticiones se realicen con un API KEY válida, 
 * un token Bearer o cualquier lógica de autenticación que necesites.
 */
export const middlewareSecurity = (req: Request, res: Response, next: NextFunction): void => {
  // Ejemplo: Validar a través de un encabezado 'x-api-key'
  const apiKey = req.headers['x-api-key'];

  // Tomamos la clave de entorno si existe, o usamos una por defecto para desarrollo
  const validApiKey = process.env.API_KEY || 'mi-secreto';

  if (!apiKey || apiKey !== validApiKey) {
    res.status(401).json({
      success: false,
      message: 'No autorizado. Se requiere una API key válida en el encabezado x-api-key.'
    });
    return;
  }

  // Si la verificación es exitosa, pasamos el control al siguiente middleware o controlador
  next();
};
