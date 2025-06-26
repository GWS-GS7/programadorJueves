-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 26-06-2025 a las 02:27:03
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejercicio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(3, 'Gran Vía Especial: de sabor intenso y carácter equilibrado', 'De color dorado intenso y espuma cremosa, esta cerveza sorprende por su equilibrio: notas cálidas de miel, galleta y fruta madura, matizadas por el frescor del lúpulo floral y herbáceo. En boca, se muestra sedosa, con cuerpo medio y un amargor perfectamente integrado. Ideal para quienes disfrutan de sabores redondos y armoniosos.', '¿Con qué disfrutarla? Con unos encurtidos, unas carnes al horno, o incluso, con una buena tarta de queso. Esta cerveza no pide permiso: se adapta con estilo a cualquier plan.', NULL),
(5, 'Gran Vía Radler: frescura cítrica con zumo natural de limón', 'La más luminosa de la familia. Esta radler elaborada con zumo natural de limón es una explosión de frescura, con aromas a cítricos recién exprimidos, fruta madura y un fondo sutil de malta. Su color pálido y ligera turbidez ya anticipan lo que viene: una cerveza ligera, suave, chispeante, perfecta para quienes buscan algo diferente, sin renunciar a la autenticidad.', '¿Con qué combinarla? Con platos frescos como tartares o mariscos, ensaladas con fruta o postres cítricos. Ideal para los días de calor, las comidas al aire libre y todos esos momentos en los que el verano pide algo tan fresco como el buen humor.', NULL),
(7, 'Gran Vía Lager sin gluten: la premiada que no necesita presentación', 'Fresca, equilibrada y con una personalidad que la hace inolvidable. Gran Vía Lager ha sido reconocida por su excelencia, y no es casualidad. Su perfil aromático destaca notas de malta, miel y especias suaves, en una cerveza clara, limpia y muy fácil de disfrutar. Lo mejor de todo: es sin gluten. Elaborada para que cualquiera pueda brindar sin renunciar al sabor ni a la calidad de una auténtica lager.', '¿Cuándo encaja? En comidas ligeras, como pescados, sushi o ensaladas con toques cítricos. También sabe brillar con embutidos o un postre suave. Es la cerveza que siempre apetece.', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
