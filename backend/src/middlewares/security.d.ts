import type { Request, Response, NextFunction } from 'express';
/**
 * Middleware de seguridad básico.
 * Verifica que las peticiones se realicen con un API KEY válida,
 * un token Bearer o cualquier lógica de autenticación que necesites.
 */
export declare const middlewareSecurity: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=security.d.ts.map