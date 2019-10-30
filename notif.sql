/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100140
 Source Host           : localhost:3306
 Source Schema         : notif

 Target Server Type    : MySQL
 Target Server Version : 100140
 File Encoding         : 65001

 Date: 30/10/2019 14:43:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for socketlist
-- ----------------------------
DROP TABLE IF EXISTS `socketlist`;
CREATE TABLE `socketlist`  (
  `username` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `socketid` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of socketlist
-- ----------------------------
INSERT INTO `socketlist` VALUES ('user2', '6q6oo43651T6CMV4AAAB');
INSERT INTO `socketlist` VALUES ('user1', 'JuxzMqAqRj6seEyjAAAD');
INSERT INTO `socketlist` VALUES ('user2', 'QXMFZDkRLO1bJyX2AAAE');
INSERT INTO `socketlist` VALUES ('user2', 'UJ57lFlMOEcbv-CqAAAD');
INSERT INTO `socketlist` VALUES ('user1', 'MDUmY848qYNORbSDAAAG');
INSERT INTO `socketlist` VALUES ('user2', 'bMvdi13rb7zSLHx4AAAH');
INSERT INTO `socketlist` VALUES ('user2', '0EjtErf9Bh2nc_gLAAAD');
INSERT INTO `socketlist` VALUES ('user2', 'pFlgp1i2_pseLaR7AAAE');
INSERT INTO `socketlist` VALUES ('user1', 'sgZw4GIyv3sPMokoAAAF');

SET FOREIGN_KEY_CHECKS = 1;
