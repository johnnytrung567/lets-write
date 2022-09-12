import { useRef, memo } from 'react'
import JoditEditor from 'jodit-react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../redux/selectors'
import { useMemo } from 'react'

const ContentEditor = ({ content, setContent, placeholder }) => {
    const theme = useSelector(themeSelector) === 'dark' ? 'dark' : 'default'
    const editor = useRef(null)

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || 'Write something...',
        minHeight: 350,
        askBeforePasteFromWord: false,
        askBeforePasteHTML: false,
        toolbarStickyOffset: 50,
        editorCssClass: 'text-lg',
        hidePoweredByJodit: true,
        theme,
    }))

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={newContent => setContent(newContent)}
        />
    )
}
export default memo(ContentEditor)
