from lxml import etree

def extract_onsets_offsets_from_xml(xml_filename):
    with open(xml_filename, "rb") as f:
        tree = etree.parse(f)
    ground_t_offsets= []
    ground_t_onsets= []
    for x in tree.getroot().xpath("//offsetSec"):
        ground_t_offsets.append(float(x.text))
    for x in tree.getroot().xpath("//onsetSec"):
        ground_t_onsets.append(float(x.text))
    return ground_t_onsets, ground_t_offsets
