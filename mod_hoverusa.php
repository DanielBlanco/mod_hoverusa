<?php
/**
 * .
 * 
 * @version   $Id$
 * @package   mod_hoverusa
 * @copyright (C) 2012 Daniel Blanco Rojas
 * @license   http://www.opensource.org/licenses/mit-license.php
 */
defined('_JEXEC') or die('Restricted access');

#$user =& JFactory::getUser();
#$app =& JFactory::getApplication();

$document = &JFactory::getDocument();
$document->addScript('modules'.DS.'mod_hoverusa'.DS.'raphael-min.js');
$document->addScript('modules'.DS.'mod_hoverusa'.DS.'jquery.usmap.js');
$document->addScript('modules'.DS.'mod_hoverusa'.DS.'mod_hoverusa.js');


